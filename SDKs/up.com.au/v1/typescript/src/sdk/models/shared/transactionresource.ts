import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoneyObject } from "./moneyobject";



// TransactionResourceAttributesCashback
/** 
 * Provides information about an instant reimbursement in the form of
 * cashback.
 * 
**/
export class TransactionResourceAttributesCashback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;
}


// TransactionResourceAttributesForeignAmount
/** 
 * Provides information about a value of money.
 * 
**/
export class TransactionResourceAttributesForeignAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesHoldInfoForeignAmount
/** 
 * Provides information about a value of money.
 * 
**/
export class TransactionResourceAttributesHoldInfoForeignAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesHoldInfo
/** 
 * Provides information about the amount at which a transaction was in the
 * `HELD` status.
 * 
**/
export class TransactionResourceAttributesHoldInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=foreignAmount" })
  foreignAmount: TransactionResourceAttributesHoldInfoForeignAmount;
}


// TransactionResourceAttributesRoundUpBoostPortion
/** 
 * Provides information about a value of money.
 * 
**/
export class TransactionResourceAttributesRoundUpBoostPortion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}


// TransactionResourceAttributesRoundUp
/** 
 * Provides information about how a Round Up was applied, such as whether or
 * not a boost was included in the Round Up.
 * 
**/
export class TransactionResourceAttributesRoundUp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=boostPortion" })
  boostPortion: TransactionResourceAttributesRoundUpBoostPortion;
}


export class TransactionResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: MoneyObject;

  @SpeakeasyMetadata({ data: "json, name=cashback" })
  cashback: TransactionResourceAttributesCashback;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=foreignAmount" })
  foreignAmount: TransactionResourceAttributesForeignAmount;

  @SpeakeasyMetadata({ data: "json, name=holdInfo" })
  holdInfo: TransactionResourceAttributesHoldInfo;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=rawText" })
  rawText: string;

  @SpeakeasyMetadata({ data: "json, name=roundUp" })
  roundUp: TransactionResourceAttributesRoundUp;

  @SpeakeasyMetadata({ data: "json, name=settledAt" })
  settledAt: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: any;
}


export class TransactionResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class TransactionResourceRelationshipsAccountData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsAccountLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsAccountData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsAccountLinks;
}


export class TransactionResourceRelationshipsCategoryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsCategoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsCategoryData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsCategoryLinks;
}


export class TransactionResourceRelationshipsParentCategoryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsParentCategoryLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class TransactionResourceRelationshipsParentCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResourceRelationshipsParentCategoryData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsParentCategoryLinks;
}


export class TransactionResourceRelationshipsTagsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class TransactionResourceRelationshipsTagsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class TransactionResourceRelationshipsTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TransactionResourceRelationshipsTagsData })
  data: TransactionResourceRelationshipsTagsData[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceRelationshipsTagsLinks;
}


export class TransactionResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: TransactionResourceRelationshipsAccount;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category: TransactionResourceRelationshipsCategory;

  @SpeakeasyMetadata({ data: "json, name=parentCategory" })
  parentCategory: TransactionResourceRelationshipsParentCategory;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: TransactionResourceRelationshipsTags;
}


export class TransactionResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: TransactionResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: TransactionResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: TransactionResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
