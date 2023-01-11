import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSetpasswordRequestBody extends SpeakeasyBase {
    confpassword: Record<string, any>;
    password: Record<string, any>;
    token: string;
}
export declare class PostSetpassword200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSetpassword400ApplicationJson extends SpeakeasyBase {
    error?: string;
}
export declare class PostSetpasswordRequest extends SpeakeasyBase {
    request: PostSetpasswordRequestBody;
}
export declare class PostSetpasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postSetpassword200ApplicationJSONObject?: PostSetpassword200ApplicationJson;
    postSetpassword400ApplicationJSONObject?: PostSetpassword400ApplicationJson;
}
