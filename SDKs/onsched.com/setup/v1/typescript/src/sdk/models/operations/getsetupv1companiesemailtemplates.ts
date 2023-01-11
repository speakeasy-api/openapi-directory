import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSetupV1CompaniesEmailTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailTemplateListViewModel?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
