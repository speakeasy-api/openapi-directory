import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchQshowQueryParams extends SpeakeasyBase {
    description?: string;
    id: string;
    tags?: string[];
    title?: string;
}
export declare class PatchQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class PatchQshowRequest extends SpeakeasyBase {
    queryParams: PatchQshowQueryParams;
    security: PatchQshowSecurity;
}
export declare class PatchQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
