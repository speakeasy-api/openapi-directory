import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoresReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Store.
     */
    id: number;
}
export declare class StoresReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    storeSingle?: shared.StoreSingle;
}
