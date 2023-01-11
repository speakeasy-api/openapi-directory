import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteQshowQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class DeleteQshowRequest extends SpeakeasyBase {
    queryParams: DeleteQshowQueryParams;
    security: DeleteQshowSecurity;
}
export declare class DeleteQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
