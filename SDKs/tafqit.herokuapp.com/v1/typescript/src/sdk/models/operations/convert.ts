import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConvertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=hundreds_form" })
  hundredsForm?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=the_number" })
  theNumber?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=unit" })
  unit?: string;
}


export class ConvertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: ConvertRequestBody;
}


export class ConvertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
