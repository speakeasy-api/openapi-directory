import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompactPerson } from "./compactperson";



export class BillSponsorshipOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class BillSponsorship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: BillSponsorshipOrganization;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: CompactPerson;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary: boolean;
}
