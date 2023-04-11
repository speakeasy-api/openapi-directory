import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCatalogueSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetCatalogueRequest extends SpeakeasyBase {
    /**
     * The identifier for the selected catalogue.
     */
    catalogueId: string;
}
export declare class GetCatalogueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCatalogue200ApplicationJSONObject?: Record<string, any>;
}
