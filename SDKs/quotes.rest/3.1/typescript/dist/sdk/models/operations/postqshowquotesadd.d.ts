import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostQshowQuotesAddQueryParams extends SpeakeasyBase {
    id: string;
    quoteid: string;
}
export declare class PostQshowQuotesAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PostQshowQuotesAddRequest extends SpeakeasyBase {
    queryParams: PostQshowQuotesAddQueryParams;
    security: PostQshowQuotesAddSecurity;
}
export declare class PostQshowQuotesAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
