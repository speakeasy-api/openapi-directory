import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoriesGetRequest extends SpeakeasyBase {
    request: Record<string, any>;
}
export declare class CategoriesGetResponse extends SpeakeasyBase {
    categoriesGetResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
