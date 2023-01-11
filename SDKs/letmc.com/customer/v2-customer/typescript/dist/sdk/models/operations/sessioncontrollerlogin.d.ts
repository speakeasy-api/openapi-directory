import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerLoginPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerLoginQueryParams extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SessionControllerLoginRequest extends SpeakeasyBase {
    pathParams: SessionControllerLoginPathParams;
    queryParams: SessionControllerLoginQueryParams;
}
export declare class SessionControllerLoginResponse extends SpeakeasyBase {
    contentType: string;
    sessionControllerLogin200ApplicationJSONString?: string;
    sessionControllerLogin200ApplicationXMLString?: string;
    sessionControllerLogin200TextJSONString?: string;
    sessionControllerLogin200TextXMLString?: string;
    statusCode: number;
}
