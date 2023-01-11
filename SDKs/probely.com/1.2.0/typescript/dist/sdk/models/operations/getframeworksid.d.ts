import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFrameworksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetFrameworksId401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetFrameworksId404ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetFrameworksIdRequest extends SpeakeasyBase {
    pathParams: GetFrameworksIdPathParams;
}
export declare class GetFrameworksIdResponse extends SpeakeasyBase {
    contentType: string;
    framework?: shared.Framework;
    statusCode: number;
    getFrameworksId401ApplicationJSONObject?: GetFrameworksId401ApplicationJson;
    getFrameworksId404ApplicationJSONObject?: GetFrameworksId404ApplicationJson;
}
