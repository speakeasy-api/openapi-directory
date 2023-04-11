import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemImportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemImportResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
