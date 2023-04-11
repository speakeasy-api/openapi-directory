import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Connect to a VBC extension
 */
export declare class EndpointVBCExtension extends SpeakeasyBase {
    extension: string;
    /**
     * The type of connection. Must be `vbc`
     */
    type: string;
}
