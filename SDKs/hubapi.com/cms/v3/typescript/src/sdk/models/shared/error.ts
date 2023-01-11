import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category: string;

  @SpeakeasyMetadata()
  context?: Record<string, string[]>;

  @SpeakeasyMetadata()
  correlationId: string;

  @SpeakeasyMetadata({ elemType: ErrorDetail })
  errors?: ErrorDetail[];

  @SpeakeasyMetadata()
  links?: Record<string, string>;

  @SpeakeasyMetadata()
  message: string;

  @SpeakeasyMetadata()
  subCategory?: string;
}
