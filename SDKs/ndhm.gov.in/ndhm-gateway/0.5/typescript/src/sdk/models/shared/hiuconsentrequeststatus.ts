import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";



export class HiuConsentRequestStatusConsentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtefacts", elemType: ConsentArtefactReference })
  consentArtefacts?: ConsentArtefactReference[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class HiuConsentRequestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentRequest" })
  consentRequest?: HiuConsentRequestStatusConsentRequest;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorT;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
