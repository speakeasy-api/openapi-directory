import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeobfuscationFile:
    r"""DeobfuscationFile
    Represents a deobfuscation file.
    """
    
    symbol_type: Optional[str] = dataclasses.field(default=None)
    
