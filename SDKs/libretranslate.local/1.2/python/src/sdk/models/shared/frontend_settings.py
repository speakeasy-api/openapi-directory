import dataclasses
from typing import Optional


@dataclasses.dataclass
class FrontendSettingsLanguageSource:
    code: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FrontendSettingsLanguageTarget:
    code: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FrontendSettingsLanguage:
    source: Optional[FrontendSettingsLanguageSource] = dataclasses.field(default=None)
    target: Optional[FrontendSettingsLanguageTarget] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FrontendSettings:
    char_limit: Optional[int] = dataclasses.field(default=None)
    frontend_timeout: Optional[int] = dataclasses.field(default=None)
    language: Optional[FrontendSettingsLanguage] = dataclasses.field(default=None)
    
