/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
 */
export class OBRisk1DeliveryAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AddressLine" })
  addressLine?: string[];

  /**
   * Number that identifies the position of a building on a street.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "BuildingNumber" })
  buildingNumber?: string;

  /**
   * Nation with its own government, occupying a particular territory.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Country" })
  country: string;

  /**
   * Identifies a subdivision of a country such as state, region, county.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "CountrySubDivision" })
  countrySubDivision?: string;

  /**
   * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "PostCode" })
  postCode?: string;

  /**
   * Name of a street or thoroughfare.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "StreetName" })
  streetName?: string;

  /**
   * Name of a built-up area, with defined boundaries, and a local government.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "TownName" })
  townName: string;
}

/**
 * Specifies the payment context
 */
export enum OBRisk1PaymentContextCodeEnum {
  BillPayment = "BillPayment",
  EcommerceGoods = "EcommerceGoods",
  EcommerceServices = "EcommerceServices",
  Other = "Other",
  PartyToParty = "PartyToParty",
}

/**
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
 */
export class OBRisk1 extends SpeakeasyBase {
  /**
   * Information that locates and identifies a specific address, as defined by postal services or in free format text.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "DeliveryAddress" })
  @Type(() => OBRisk1DeliveryAddress)
  deliveryAddress?: OBRisk1DeliveryAddress;

  /**
   * Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "MerchantCategoryCode" })
  merchantCategoryCode?: string;

  /**
   * The unique customer identifier of the PSU with the merchant.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "MerchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  /**
   * Specifies the payment context
   */
  @SpeakeasyMetadata()
  @Expose({ name: "PaymentContextCode" })
  paymentContextCode?: OBRisk1PaymentContextCodeEnum;
}
