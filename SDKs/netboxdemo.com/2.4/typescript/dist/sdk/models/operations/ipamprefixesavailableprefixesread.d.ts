import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamPrefixesAvailablePrefixesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this prefix.
     */
    id: number;
}
export declare class IpamPrefixesAvailablePrefixesReadResponse extends SpeakeasyBase {
    contentType: string;
    prefix?: shared.Prefix;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
