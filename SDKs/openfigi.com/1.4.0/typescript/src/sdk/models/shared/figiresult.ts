import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FigiResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compositeFIGI" })
  compositeFIGI?: string;

  @SpeakeasyMetadata({ data: "json, name=exchCode" })
  exchCode?: string;

  @SpeakeasyMetadata({ data: "json, name=figi" })
  figi?: string;

  @SpeakeasyMetadata({ data: "json, name=marketSector" })
  marketSector?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=securityDescription" })
  securityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=securityType" })
  securityType?: string;

  @SpeakeasyMetadata({ data: "json, name=securityType2" })
  securityType2?: string;

  @SpeakeasyMetadata({ data: "json, name=shareClassFIGI" })
  shareClassFIGI?: string;

  @SpeakeasyMetadata({ data: "json, name=ticker" })
  ticker?: string;
}
