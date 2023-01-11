import { SpeakeasyBase } from "../../../internal/utils";
export declare class SessionControllerGetSessionInfoPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class SessionControllerGetSessionInfoQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class SessionControllerGetSessionInfoRequest extends SpeakeasyBase {
    pathParams: SessionControllerGetSessionInfoPathParams;
    queryParams: SessionControllerGetSessionInfoQueryParams;
}
export declare class SessionControllerGetSessionInfoResponse extends SpeakeasyBase {
    contentType: string;
    sessionControllerGetSessionInfo200ApplicationJSONString?: string;
    sessionControllerGetSessionInfo200ApplicationXMLString?: string;
    sessionControllerGetSessionInfo200TextJSONString?: string;
    sessionControllerGetSessionInfo200TextXMLString?: string;
    statusCode: number;
}
