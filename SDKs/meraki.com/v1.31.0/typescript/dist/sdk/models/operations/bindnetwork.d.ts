import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BindNetworkRequestBody extends SpeakeasyBase {
    /**
     * Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model.
     */
    autoBind?: boolean;
    /**
     * The ID of the template to which the network should be bound.
     */
    configTemplateId: string;
}
export declare class BindNetworkRequest extends SpeakeasyBase {
    requestBody: BindNetworkRequestBody;
    networkId: string;
}
export declare class BindNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    bindNetwork200ApplicationJSONObject?: Record<string, any>;
}
