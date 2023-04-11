import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamPrefixesAvailableIpsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this prefix.
     */
    id: number;
}
export declare class IpamPrefixesAvailableIpsReadResponse extends SpeakeasyBase {
    availableIPS?: shared.AvailableIP[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
