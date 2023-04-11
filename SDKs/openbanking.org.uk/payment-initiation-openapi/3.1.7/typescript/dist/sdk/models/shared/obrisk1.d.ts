import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
 */
export declare class OBRisk1DeliveryAddress extends SpeakeasyBase {
    addressLine?: string[];
    /**
     * Number that identifies the position of a building on a street.
     */
    buildingNumber?: string;
    /**
     * Nation with its own government, occupying a particular territory.
     */
    country: string;
    /**
     * Identifies a subdivision of a country such as state, region, county.
     */
    countrySubDivision?: string;
    /**
     * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
     */
    postCode?: string;
    /**
     * Name of a street or thoroughfare.
     */
    streetName?: string;
    /**
     * Name of a built-up area, with defined boundaries, and a local government.
     */
    townName: string;
}
/**
 * Specifies the payment context
 */
export declare enum OBRisk1PaymentContextCodeEnum {
    BillPayment = "BillPayment",
    EcommerceGoods = "EcommerceGoods",
    EcommerceServices = "EcommerceServices",
    Other = "Other",
    PartyToParty = "PartyToParty"
}
/**
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
 */
export declare class OBRisk1 extends SpeakeasyBase {
    /**
     * Information that locates and identifies a specific address, as defined by postal services or in free format text.
     */
    deliveryAddress?: OBRisk1DeliveryAddress;
    /**
     * Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
     */
    merchantCategoryCode?: string;
    /**
     * The unique customer identifier of the PSU with the merchant.
     */
    merchantCustomerIdentification?: string;
    /**
     * Specifies the payment context
     */
    paymentContextCode?: OBRisk1PaymentContextCodeEnum;
}
