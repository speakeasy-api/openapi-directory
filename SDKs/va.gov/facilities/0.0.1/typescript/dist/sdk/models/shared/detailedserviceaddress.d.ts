import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Service location address.
 */
export declare class DetailedServiceAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    /**
     * Building name and/or number of service.
     */
    buildingNameNumber?: string;
    city?: string;
    /**
     * Clinic name for service.
     */
    clinicName?: string;
    countryCode?: string;
    state?: string;
    /**
     * Wing, floor, or room number of service.
     */
    wingFloorOrRoomNumber?: string;
    zipCode?: string;
}
