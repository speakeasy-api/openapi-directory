import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the server and the geographical area that it covers.
**/
export declare class InfoResponse extends SpeakeasyBase {
    bbox?: string;
    features?: Record<string, any>;
    version?: string;
}
