import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQuoteTagsRemoveQueryParams extends SpeakeasyBase {
    id: string;
    tags: string;
}
export declare class PostQuoteTagsRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQuoteTagsRemoveRequest extends SpeakeasyBase {
    queryParams: PostQuoteTagsRemoveQueryParams;
    security: PostQuoteTagsRemoveSecurity;
}
export declare class PostQuoteTagsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
