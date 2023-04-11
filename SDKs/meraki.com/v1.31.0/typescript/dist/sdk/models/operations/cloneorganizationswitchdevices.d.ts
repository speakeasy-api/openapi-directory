import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CloneOrganizationSwitchDevicesRequestBody extends SpeakeasyBase {
    /**
     * Serial number of the source switch (must be on a network not bound to a template)
     */
    sourceSerial: string;
    /**
     * Array of serial numbers of one or more target switches (must be on a network not bound to a template)
     */
    targetSerials: string[];
}
export declare class CloneOrganizationSwitchDevicesRequest extends SpeakeasyBase {
    requestBody: CloneOrganizationSwitchDevicesRequestBody;
    organizationId: string;
}
export declare class CloneOrganizationSwitchDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    cloneOrganizationSwitchDevices200ApplicationJSONObject?: Record<string, any>;
}
