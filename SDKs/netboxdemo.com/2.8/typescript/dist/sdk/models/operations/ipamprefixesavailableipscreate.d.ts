import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamPrefixesAvailableIpsCreateRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this prefix.
     */
    id: number;
}
export declare class IpamPrefixesAvailableIpsCreateResponse extends SpeakeasyBase {
    availableIPS?: shared.AvailableIP[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
