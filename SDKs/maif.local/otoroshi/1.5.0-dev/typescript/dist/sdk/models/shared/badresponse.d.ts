import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An HTTP response that is not supposed to be returned by a service
**/
export declare class BadResponse extends SpeakeasyBase {
    body: string;
    headers: Record<string, string>;
    status: number;
}
