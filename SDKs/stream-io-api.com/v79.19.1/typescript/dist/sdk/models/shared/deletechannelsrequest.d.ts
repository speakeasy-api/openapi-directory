import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteChannelsRequest extends SpeakeasyBase {
    /**
     * All channels that should be deleted
     */
    cids?: string[];
    /**
     * Specify if channels and all ressources should be hard deleted
     */
    hardDelete?: boolean;
}
