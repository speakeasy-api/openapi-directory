import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamPrefixesAvailablePrefixesCreateRequest extends SpeakeasyBase {
    writablePrefixInput: shared.WritablePrefixInput;
    /**
     * A unique integer value identifying this prefix.
     */
    id: number;
}
export declare class IpamPrefixesAvailablePrefixesCreateResponse extends SpeakeasyBase {
    availablePrefixes?: shared.AvailablePrefix[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
