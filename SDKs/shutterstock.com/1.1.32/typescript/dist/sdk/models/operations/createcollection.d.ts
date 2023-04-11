import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    catalogCollection?: shared.CatalogCollection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
