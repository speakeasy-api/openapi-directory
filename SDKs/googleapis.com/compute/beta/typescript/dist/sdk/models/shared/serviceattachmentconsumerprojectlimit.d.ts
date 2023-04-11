import { SpeakeasyBase } from "../../../internal/utils";
export declare class ServiceAttachmentConsumerProjectLimit extends SpeakeasyBase {
    /**
     * The value of the limit to set.
     */
    connectionLimit?: number;
    /**
     * The network URL for the network to set the limit for.
     */
    networkUrl?: string;
    /**
     * The project id or number for the project to set the limit for.
     */
    projectIdOrNum?: string;
}
