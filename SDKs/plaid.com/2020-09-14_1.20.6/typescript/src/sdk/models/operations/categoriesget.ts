import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoriesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class CategoriesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoriesGetResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
