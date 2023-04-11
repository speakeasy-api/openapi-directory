import { SpeakeasyBase } from "../../../internal/utils";
import { LatestTenancyModel } from "./latesttenancymodel";
import { LinkedLandlordModel } from "./linkedlandlordmodel";
/**
 * Holds information on linked properties
 */
export declare class LinkedPropertiesModel extends SpeakeasyBase {
    /**
     * Address 1
     */
    address1?: string;
    /**
     * Address2
     */
    address2?: string;
    /**
     * Address 3
     */
    address3?: string;
    /**
     * Address 4
     */
    address4?: string;
    /**
     * Address Flat Room Number
     */
    addressFlatRoomNumber?: string;
    /**
     * Address Number
     */
    addressNumber?: string;
    /**
     * ETag
     */
    eTag?: string;
    /**
     * Holds information on the most recent tenancy linked to the property.
     */
    latestTenancy?: LatestTenancyModel;
    /**
     * Holds information on landlords
     */
    mainLandlord?: LinkedLandlordModel;
    /**
     * OID
     */
    oid?: string;
    /**
     * Postcode
     */
    postcode?: string;
}
