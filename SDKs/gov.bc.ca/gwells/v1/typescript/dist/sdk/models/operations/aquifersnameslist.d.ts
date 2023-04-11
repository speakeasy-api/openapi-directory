import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AquifersNamesListRequest extends SpeakeasyBase {
    /**
     * A search term.
     */
    search?: string;
}
export declare class AquifersNamesListResponse extends SpeakeasyBase {
    aquiferSerializerBasics?: shared.AquiferSerializerBasic[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
