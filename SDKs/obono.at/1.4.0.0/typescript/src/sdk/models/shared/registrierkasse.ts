import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Registrierkasse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benutzerschluessel" })
  benutzerschluessel?: string;

  @SpeakeasyMetadata({ data: "json, name=Kassen-ID" })
  kassenID?: string;

  @SpeakeasyMetadata({ data: "json, name=Signaturerstellungseinheit-UUID" })
  signaturerstellungseinheitUUID?: string;

  @SpeakeasyMetadata({ data: "json, name=_href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=_uuid" })
  uuid?: string;
}
