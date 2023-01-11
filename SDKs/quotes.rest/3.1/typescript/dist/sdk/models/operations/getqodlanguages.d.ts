import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQodLanguagesSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}
export declare class GetQodLanguagesRequest extends SpeakeasyBase {
    security: GetQodLanguagesSecurity;
}
export declare class GetQodLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
