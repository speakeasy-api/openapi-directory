import { SpeakeasyBase } from "../../../internal/utils";
export declare class Workspace extends SpeakeasyBase {
    createdAt?: string;
    /**
     * Internal workspace id
     */
    id?: number;
    /**
     * The unique workspace idenfitifer specified by your application
     */
    identifier?: string;
    /**
     * True if a master workspace
     */
    isMasterWorkspace?: boolean;
}
