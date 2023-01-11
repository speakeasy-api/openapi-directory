import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1AnnotatorSelector:
    r"""GoogleCloudContactcenterinsightsV1AnnotatorSelector
    Selector of all available annotators and phrase matchers to run.
    """
    
    issue_models: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModels') }})
    phrase_matchers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchers') }})
    run_entity_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runEntityAnnotator') }})
    run_intent_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runIntentAnnotator') }})
    run_interruption_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runInterruptionAnnotator') }})
    run_issue_model_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runIssueModelAnnotator') }})
    run_phrase_matcher_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runPhraseMatcherAnnotator') }})
    run_sentiment_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runSentimentAnnotator') }})
    run_silence_annotator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runSilenceAnnotator') }})
    
