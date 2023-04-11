import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQodCategoriesSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQodCategoriesRequest extends SpeakeasyBase {
    /**
     * Return detailed information of the categories. Note the data format changes between the two values of this switch.
     */
    detailed?: boolean;
    /**
     * Language of the QOD category. The language must be supported in our QOD system.
     */
    language?: string;
}
export declare class GetQodCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
