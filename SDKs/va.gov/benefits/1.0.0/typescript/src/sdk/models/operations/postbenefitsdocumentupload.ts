import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBenefitsDocumentUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PostBenefitsDocumentUpload202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any;
}


export class PostBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class PostBenefitsDocumentUpload403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class PostBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: any[];
}


export class PostBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}


export class PostBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PostBenefitsDocumentUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PostBenefitsDocumentUploadSecurity;
}


export class PostBenefitsDocumentUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBenefitsDocumentUpload202ApplicationJSONObject?: PostBenefitsDocumentUpload202ApplicationJson;

  @SpeakeasyMetadata()
  postBenefitsDocumentUpload401ApplicationJSONObject?: PostBenefitsDocumentUpload401ApplicationJson;

  @SpeakeasyMetadata()
  postBenefitsDocumentUpload403ApplicationJSONObject?: PostBenefitsDocumentUpload403ApplicationJson;

  @SpeakeasyMetadata()
  postBenefitsDocumentUpload422ApplicationJSONObject?: PostBenefitsDocumentUpload422ApplicationJson;

  @SpeakeasyMetadata()
  postBenefitsDocumentUpload429ApplicationJSONObject?: PostBenefitsDocumentUpload429ApplicationJson;

  @SpeakeasyMetadata()
  postBenefitsDocumentUpload500ApplicationJSONObject?: PostBenefitsDocumentUpload500ApplicationJson;
}
