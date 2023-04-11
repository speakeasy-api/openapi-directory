import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllCustomFieldsByCategorySecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetAllCustomFieldsByCategoryRequest extends SpeakeasyBase {
    /**
     * Custom Fields Category
     */
    category: string;
    /**
     * Company Id
     */
    companyId: string;
}
export declare class GetAllCustomFieldsByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved
     */
    customFieldDefinitions?: shared.CustomFieldDefinition[];
    /**
     * Invalid Category
     */
    errors?: shared.ErrorT[];
}
