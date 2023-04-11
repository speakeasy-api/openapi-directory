import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSettingsRequestBody extends SpeakeasyBase {
    displayedAttributes?: string[];
    filterableAttributes?: string[];
    searchableAttributes?: string[];
    sortableAttributes?: string[];
    stopWords?: string[];
}
export declare class UpdateSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
