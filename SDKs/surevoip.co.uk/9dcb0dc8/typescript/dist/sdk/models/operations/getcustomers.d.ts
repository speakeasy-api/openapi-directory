import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomers302ApplicationJson extends SpeakeasyBase {
    location?: string;
}
export declare class GetCustomersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCustomers302ApplicationJSONObject?: GetCustomers302ApplicationJson;
}
