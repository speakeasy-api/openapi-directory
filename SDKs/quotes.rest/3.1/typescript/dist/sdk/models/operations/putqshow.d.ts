import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutQshowQueryParams extends SpeakeasyBase {
    description?: string;
    tags?: string[];
    title: string;
}
export declare class PutQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PutQshowRequest extends SpeakeasyBase {
    queryParams: PutQshowQueryParams;
    security: PutQshowSecurity;
}
export declare class PutQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
