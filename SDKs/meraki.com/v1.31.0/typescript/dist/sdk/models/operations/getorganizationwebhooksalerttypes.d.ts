import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter sample alerts to a specific product type
 */
export declare enum GetOrganizationWebhooksAlertTypesProductTypeEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Health = "health",
    Platform = "platform",
    Sensor = "sensor",
    Sm = "sm",
    Switch = "switch",
    Wireless = "wireless"
}
export declare class GetOrganizationWebhooksAlertTypesRequest extends SpeakeasyBase {
    organizationId: string;
    /**
     * Filter sample alerts to a specific product type
     */
    productType?: GetOrganizationWebhooksAlertTypesProductTypeEnum;
}
export declare class GetOrganizationWebhooksAlertTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationWebhooksAlertTypes200ApplicationJSONObjects?: Record<string, any>[];
}
