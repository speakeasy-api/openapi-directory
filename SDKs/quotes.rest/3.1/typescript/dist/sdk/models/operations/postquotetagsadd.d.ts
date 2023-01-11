import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteTagsAddQueryParams extends SpeakeasyBase {
    id: string;
    tags: string;
}
export declare class PostQuoteTagsAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteTagsAddRequest extends SpeakeasyBase {
    queryParams: PostQuoteTagsAddQueryParams;
    security: PostQuoteTagsAddSecurity;
}
export declare class PostQuoteTagsAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
