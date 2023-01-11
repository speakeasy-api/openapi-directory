import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";


export enum PatientLinkReferenceResultLinkAuthenticationTypeEnum {
    Direct = "DIRECT",
    Mediated = "MEDIATED"
}


export class PatientLinkReferenceResultLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticationType" })
  authenticationType: PatientLinkReferenceResultLinkAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=referenceNumber" })
  referenceNumber: string;
}


export class PatientLinkReferenceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorT;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: PatientLinkReferenceResultLink;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
