import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindFormByFormNamePathParams extends SpeakeasyBase {
    formName: string;
}
export declare class FindFormByFormNameSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class FindFormByFormName200ApplicationJson extends SpeakeasyBase {
    data: any;
}
export declare class FindFormByFormName404ApplicationJson extends SpeakeasyBase {
    errors: any[];
}
export declare class FindFormByFormNameRequest extends SpeakeasyBase {
    pathParams: FindFormByFormNamePathParams;
    security: FindFormByFormNameSecurity;
}
export declare class FindFormByFormNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    findFormByFormName200ApplicationJSONObject?: FindFormByFormName200ApplicationJson;
    findFormByFormName401ApplicationJSONAny?: any;
    findFormByFormName404ApplicationJSONObject?: FindFormByFormName404ApplicationJson;
    findFormByFormName429ApplicationJSONAny?: any;
}
